import React from "react";
import FooterBar from "../../components/headers_footers/FooterBar";
import HeaderBar from "../../components/headers_footers/HeaderBar";

// Just add your layout
export default function About() {
	return (
		<>
			<div className='content-area group'>
				<HeaderBar />

				<div className='container'>
					<h1>About Home Decor</h1>

					<div class='image-banner'>
						<img
							style={{ width: "1320px", height: "325px", borderRadius: "10px" }}
							src='					https://th.bing.com/th/id/R.a86e3a1dcad8b643d58934793eb64326?rik=cx2Sr54XX6nc3A&riu=http%3a%2f%2fi1.adis.ws%2fi%2fhanoverdirect%2fhome-decor-main-cat-F2018&ehk=v6iK%2btQZxVrCsDDWkXXELKwOe1KYX0fMkzfPrHMp0UI%3d&risl=&pid=ImgRaw&r=0
'
						/>

						<div class='banner-description'>
							<p>Welcome to Home Decor! Please feel free to email us for any enquiries, we're looking forward to meeting you soon.</p>
						</div>
					</div>

					<div className='ab'>
						<b>Our Vision</b>
						<p>
							Welcome to Home Decor, your number one source for all things Furniture. We're dedicated to giving you the very best of Furniture, with a focus on Chairs, coaches, bar stools.
							Founded in 2004 by Michael Chandler, Home Decor has come a long way from its beginnings in East London.
							<p>
								{" "}
								When Michael first started out, his passion for "eco-friendly housing products" drove them to quit day job, do tons of research, so that Your Home Decor can offer you "the
								world's most advanced toothbrush".
							</p>
							<p>we are dedicated to: </p>
							<ul>
								<li>Focusing on finding you the best Online Product Descriptions</li>
								<li>Helping you with your business</li>
								<li>Providing quality service</li>
								<li>Competitve Prices</li>
							</ul>
							<b>Our Scope</b>
							<p>
								We now serve customers all over the world, and are thrilled that we're able to turn our passion into our own website. we hope you enjoy our products as much as we enjoy
								offering them to you.
							</p>{" "}
							Finally, this is our complete about us page about details are showing what is the motive to create Home Decor. If you have any questions or comments, please don't hesitate to
							contact us.
						</p>

						<p>Sincerely, Michael Have a nice day !</p>
					</div>
				</div>
				<br></br>

				<FooterBar />
			</div>
		</>
	);
}
