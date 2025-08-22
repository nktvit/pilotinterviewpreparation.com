export default {
	async fetch(request, env, ctx) {
		const origin = request.headers.get("Origin")

		const allowedOrigins = [
			"https://pilotinterviewpreparation.com",
			"http://localhost:5173",
			"http://127.0.0.1:5173"
		];

		const corsHeaders = {
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Max-Age": "86400",
		};

		if (allowedOrigins.includes(origin)) {
			corsHeaders["Access-Control-Allow-Origin"] = origin;
		}

		if (request.method === "OPTIONS") {
			return new Response(null, { headers: corsHeaders });
		}

		if (request.method !== "POST") {
			return new Response(
				JSON.stringify({ error: "Method not allowed" }),
				{
					status: 405,
					headers: {
						"Content-Type": "application/json",
						...corsHeaders
					}
				}
			);
		}

		try {
			const apiKey = env.RESEND_API_KEY
			console.log("API Key:", apiKey)
			// Parse the form data
			const formData = await request.json()

			// Validate required fields
			if (!formData.name || !formData.email || !formData.phone) {
				return new Response(JSON.stringify({error: "Missing required fields"}), {
					status: 400,
					headers: {
						"Content-Type": "application/json",
						...corsHeaders
					}
				})
			}

			// Format date if provided
			const formattedDate = formData.preferredDate
				? new Date(formData.preferredDate).toLocaleDateString('en-GB')
				: 'Not specified'

			// Send email to admin
			const adminEmail = await fetch("https://api.resend.com/emails", {
				method: "POST",
				headers: {
					"Authorization": `Bearer ${apiKey}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					from: "Pilot Interview Preparation <onboarding@resend.dev>",
					to: "info@pilotinterviewpreparation.com",
					reply_to: formData.email,
					subject: `New Inquiry from ${formData.name} - Pilot Interview Preparation`,
					html: `
						<h2>New Contact Form Submission</h2>
						<p><strong>Name:</strong> ${formData.name}</p>
						<p><strong>Email:</strong> ${formData.email}</p>
						<p><strong>Phone:</strong> ${formData.phone}</p>
						<p><strong>Target Airline:</strong> ${formData.airline || 'Not specified'}</p>
						<p><strong>Preferred Date:</strong> ${formattedDate}</p>
						<p><strong>Message:</strong></p>
						<p>${formData.message || 'No message provided'}</p>
					  `
				})
			})

			// If admin email fails, throw error
			if (!adminEmail.ok) {
				const errorData = await adminEmail.json()
				throw new Error(`Failed to send admin email: ${JSON.stringify(errorData)}`)
			}

			// Send confirmation email to user (possibly add later)
			const userEmail = await fetch("https://api.resend.com/emails", {
				method: "POST",
				headers: {
					"Authorization": `Bearer ${apiKey}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					from: "Pilot Interview Preparation <onboarding@resend.dev>", // Update to your verified domain later
					to: 'info@pilotinterviewpreparation.com',
					subject: "Your Interview Preparation Request",
					html: `
            <h2>Thank you for your request!</h2>
            <p>Dear ${formData.name},</p>
            <p>We have received your request for pilot interview preparation. Our team will review your details and contact you shortly to arrange your session.</p>

            <h3>Your Request Details:</h3>
            <ul>
                <li><strong>Name:</strong> ${formData.name}</li>
                <li><strong>Target Airline:</strong> ${formData.airline || 'Not specified'}</li>
                <li><strong>Preferred Date:</strong> ${formattedDate}</li>
            </ul>

            <p>If you need to make any changes to your request or have any questions, please contact us at:</p>
            <p>Email: info@pilotinterviewpreparation.com</p>
            <p>Phone: +353 868 167 242</p>

            <p>Best regards,</p>
            <p>Denis Cassidy<br>Pilot Interview Preparation</p>
          `
				})
			})

			// Return success response
			return new Response(JSON.stringify({success: true}), {
				status: 200,
				headers: {
					"Content-Type": "application/json",
					...corsHeaders
				}
			})

		} catch (error) {
			// Log the error and return a 500 response
			console.error("Error sending email:", error)

			return new Response(JSON.stringify({error: "Failed to send email"}), {
				status: 500,
				headers: {
					"Content-Type": "application/json",
					...corsHeaders
				}
			})
		}
	}
}
