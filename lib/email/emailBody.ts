"use server"

export const generateBookingEmailBody = () => {
  return `
  `
}

interface ReportFormData {
  area?: string
	security?: string
	subject: string
	description: string
}


export const buildMailBodyForReportIssue = (data: ReportFormData) => {
  return `
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Issue Report</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #444; border-bottom: 2px solid #444; padding-bottom: 10px;">Issue Report</h1>
        
        <div style="margin-bottom: 20px;">
            <h2 style="color: #666;">Area</h2>
            <p style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;">${data.area}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h2 style="color: #666;">Security Level</h2>
            <p style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;">${data.security}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h2 style="color: #666;">Subject</h2>
            <p style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;">${data.subject}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h2 style="color: #666;">Description</h2>
            <p style="background-color: #f4f4f4; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${data.description}</p>
        </div>
        
        <footer style="margin-top: 30px; text-align: center; font-size: 0.8em; color: #666;">
            <p>This is an automated report. Please do not reply to this email.</p>
        </footer>
    </body>
    </html>
  `
}