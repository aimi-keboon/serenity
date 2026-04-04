/**
 * Langkawi Serenity - Global Footer Component
 * This script injects the footer into the bottom of every page.
 */

function injectFooter() {
    const footerTemplate = `
    <footer style="background: #1b4332; color: #f4f4f4; padding: 80px 10% 40px; margin-top: 80px; font-family: 'Montserrat', sans-serif; border-top: 4px solid #d4a373;">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 50px;">
            
            <div style="line-height: 1.8;">
                <h3 style="font-family: 'Playfair Display', serif; color: #d4a373; font-size: 1.5rem; margin-bottom: 20px; letter-spacing: 1px;">LANGKAWI<span style="color: white;">SERENITY</span></h3>
                <p style="font-size: 0.9rem; opacity: 0.8;">A humble, calming retreat in the Heart of Kedah. Focused on slow living, forest air, and finding stillness amidst the Andaman Sea.</p>
            </div>

            <div>
                <h4 style="color: #d4a373; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 25px;">Navigation</h4>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.2; font-size: 0.9rem;">
                    <li><a href="index.html" style="color: white; text-decoration: none; opacity: 0.7; transition: 0.3s;">Home</a></li>
                    <li><a href="itinerary.html" style="color: white; text-decoration: none; opacity: 0.7; transition: 0.3s;">The Retreat Flow</a></li>
                    <li><a href="calendar.html" style="color: white; text-decoration: none; opacity: 0.7; transition: 0.3s;">Retreat Schedule</a></li>
                    <li><a href="register.html" style="color: white; text-decoration: none; opacity: 0.7; transition: 0.3s;">Book a Spot</a></li>
                    <li><a href="tnc.html" target="_blank" style="color: white; text-decoration: none; opacity: 0.7; transition: 0.3s;">Terms & Conditions</a></li>
                </ul>
            </div>

            <div>
                <h4 style="color: #d4a373; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 25px;">Inquiries</h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">Have questions about our sessions or travel planning?</p>
                <a href="mailto:langkawi.serenity@gmail.com" style="color: white; text-decoration: none; font-weight: 600; border-bottom: 1px solid #d4a373; padding-bottom: 3px;">
                    langkawi.serenity@gmail.com
                </a>
                
            </div>

        </div>

        <div style="margin-top: 60px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; font-size: 0.75rem; opacity: 0.5; letter-spacing: 1px;">
            <p>&copy; 2026 LANGKAWI SERENITY RETREAT. ALL RIGHTS RESERVED.</p>
            <p style="margin-top: 10px;">Langkawi, Kedah, Malaysia</p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerTemplate);
}

// Ensure the footer loads after the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
} else {
    injectFooter();
}