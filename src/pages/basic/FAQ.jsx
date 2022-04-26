import React from "react";
import FooterBar from "../../components/headers_footers/FooterBar";
import HeaderBar from "../../components/headers_footers/HeaderBar";

// Just add your layout
export default function FAQ() {
	return (
		<div className='content-area group'>
			<HeaderBar />

			<div className='container'>
				<h1>
					<b>FAQ - Order, Shipping</b>
				</h1>
				<div className='faq'>
					<p>
						<b>Q: How long does it take to ship my order?</b>
						<br></br>A: Orders are usually shipped within 1-2 business days after placing the order.
						<br></br>
						<br></br>
						<b>Q: When will my orderarrive?</b>
						<br></br> A: Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation email you’ve
						received.
						<br></br>
						<b>
							<br></br>Q: How do I track my order?
						</b>
						<br></br>A: Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.
						<br></br>
						<b>
							<br></br>Q: What’s your return policy?{" "}
						</b>
						<br></br>A: We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number
						and we’ll ship a return label.
						<br></br>
						<b>
							<br></br>Q: How do I make changes to an existing order?{" "}
						</b>
						<br></br>A: Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the
						needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes
						you may require.
						<br></br>{" "}
						<b>
							<br></br>Q: What shipping options do you have?
						</b>
						<br></br>A: For USA domestic orders we offer FedEx and USPS shipping.
						<br></br>
						<b>
							<br></br>Q: Do you ship internationally?
						</b>
						<br></br> A: We currently ship to the USA, Canada, UK and Australia.
						<br></br>
						<b>
							<br></br>Q: Do you sell gift cards?
						</b>
						<br></br>A: We offer the option to purchase a gift card in our store. Contact us via email to learn about the different available options.
						<br></br>
						<b>
							<br></br>Q: Can I receive a refund?{" "}
						</b>
						<br></br>A: If you are unhappy with the product you’ve received, you can get a refund.
					</p>
					<div class='image-banners'>
						<img style={{ width: "550px", height: "225px", borderRadius: "10px" }} src='https://th.bing.com/th/id/R.ff8b712be42186cab26c8960a8e0b725?rik=tRwr2n1kccOWvw&pid=ImgRaw&r=0' />

						<div class='banner-descriptions'>
							<p>Please feel free to visit my linkedIn account and drop me a message or contact me using this form, looking forward to meeting you.</p>
						</div>
					</div>					

				</div>
			</div>

			<br></br>

			<FooterBar />
		</div>
	);
}
