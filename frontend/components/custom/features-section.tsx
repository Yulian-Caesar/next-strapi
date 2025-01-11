function getIcon(name: string) {
	switch (name) {
		case "TRADE_ICON":
			return <TradeIcon className="w-12 h-12 mb-4 text-gray-900" />;
		case "COIN_FLIP_ATM_ICON":
			return <FlipIcon className="w-12 h-12 mb-4 text-gray-900" />;
		case "COIN_FLIP_WALLET_ICON":
			return <WalletIcon className="w-12 h-12 mb-4 text-gray-900" />;
		default:
			return null;
	}
}

interface FeatureProps {
	id: number;
	heading: string;
	subHeading: string;
	icon: string;
}

interface FeatureSectionProps {
	id: number;
	__component: string;
	title: string;
	description: string;
	feature: FeatureProps[];
}

export function FeatureSection({
	data,
}: {
	readonly data: FeatureSectionProps;
}) {
	const { feature } = data;
	console.dir(feature, { depth: null });
	return (
		<div className="">
			<div className="flex-1">
				<section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
					<div className="grid gap-8 md:grid-cols-3">
						{feature.map((feature) => (
							<div
								key={feature.id}
								className="flex flex-col items-center text-center"
							>
								{getIcon(feature.icon)}
								<h2 className="mb-4 text-2xl font-bold">{feature.heading}</h2>
								<p className="text-gray-500">
									{feature.subHeading}
								</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

function TradeIcon(props: any) {
	return (
		<svg 
			{...props}
			width="36" 
			height="40" 
			viewBox="0 0 36 40" 
			fill="none"
		>
			<path d="M13.022 7.55554C12.3619 7.55554 11.7289 7.81776 11.2621 8.28452C10.7954 8.75127 10.5331 9.38433 10.5331 10.0444C10.5331 10.7045 10.7954 11.3376 11.2621 11.8043C11.7289 12.2711 12.3619 12.5333 13.022 12.5333H26.925L23.7068 15.7514C23.2535 16.2209 23.0026 16.8496 23.0083 17.5021C23.0139 18.1547 23.2757 18.779 23.7371 19.2404C24.1986 19.7019 24.8228 19.9636 25.4754 19.9693C26.128 19.975 26.7567 19.7241 27.2261 19.2707L34.6928 11.8041C35.1594 11.3373 35.4215 10.7044 35.4215 10.0444C35.4215 9.38446 35.1594 8.75152 34.6928 8.28478L27.2261 0.818117C26.9965 0.580402 26.7219 0.390794 26.4182 0.260354C26.1146 0.129913 25.788 0.0612543 25.4575 0.0583825C25.127 0.0555108 24.7993 0.118484 24.4934 0.243628C24.1876 0.368771 23.9097 0.553579 23.676 0.787267C23.4423 1.02096 23.2575 1.29884 23.1323 1.60472C23.0072 1.9106 22.9442 2.23833 22.9471 2.5688C22.95 2.89928 23.0186 3.22587 23.1491 3.52952C23.2795 3.83318 23.4691 4.10781 23.7068 4.3374L26.925 7.55554H13.022Z" fill="url(#paint0_linear_18_770)"/>
			<path d="M22.9776 32.4444C23.6377 32.4444 24.2707 32.1822 24.7375 31.7154C25.2043 31.2487 25.4665 30.6156 25.4665 29.9555C25.4665 29.2954 25.2043 28.6624 24.7375 28.1956C24.2707 27.7289 23.6377 27.4666 22.9776 27.4666H9.07466L12.2928 24.2485C12.5305 24.0189 12.7201 23.7443 12.8506 23.4406C12.981 23.137 13.0497 22.8104 13.0525 22.4799C13.0554 22.1494 12.9924 21.8217 12.8673 21.5158C12.7421 21.21 12.5573 20.9321 12.3236 20.6984C12.09 20.4647 11.8121 20.2799 11.5062 20.1547C11.2003 20.0296 10.8726 19.9666 10.5421 19.9695C10.2116 19.9724 9.88504 20.041 9.58139 20.1715C9.27773 20.3019 9.0031 20.4915 8.77351 20.7292L1.30684 28.1959C0.840243 28.6626 0.578125 29.2956 0.578125 29.9555C0.578125 30.6155 0.840243 31.2484 1.30684 31.7152L8.77351 39.1818C9.24292 39.6352 9.87161 39.8861 10.5242 39.8804C11.1768 39.8747 11.801 39.613 12.2625 39.1515C12.7239 38.6901 12.9857 38.0658 12.9914 37.4132C12.997 36.7607 12.7462 36.132 12.2928 35.6626L9.07466 32.4444H22.9776Z" fill="url(#paint1_linear_18_770)"/>
			<defs>
			<linearGradient id="paint0_linear_18_770" x1="6.92978" y1="59.3768" x2="58.7249" y2="24.0872" gradientUnits="userSpaceOnUse">
			<stop stopColor="#982DEC"/>
			<stop offset="0.572917" stopColor="#DC8DF8"/>
			<stop offset="0.895833" stopColor="#A9C4F3"/>
			</linearGradient>
			<linearGradient id="paint1_linear_18_770" x1="6.92978" y1="59.3768" x2="58.7249" y2="24.0872" gradientUnits="userSpaceOnUse">
			<stop stopColor="#982DEC"/>
			<stop offset="0.572917" stopColor="#DC8DF8"/>
			<stop offset="0.895833" stopColor="#A9C4F3"/>
			</linearGradient>
			</defs>
		</svg>
	);
}

function FlipIcon(props: any) {
	return (
		<svg 
			{...props}
			width="42" 
			height="34" 
			viewBox="0 0 42 34" 
			fill="none"
		>
			<path fillRule="evenodd" clipRule="evenodd" d="M27.2222 0.40741C29.931 0.40741 32.2374 2.13926 33.0919 4.55556H14.7778C12.0274 4.55556 9.38966 5.64815 7.44484 7.59297C5.50002 9.53779 4.40743 12.1755 4.40743 14.9259V24.9437C3.19394 24.5144 2.14341 23.7193 1.40052 22.6681C0.657622 21.6169 0.258906 20.3613 0.259278 19.0741V6.62963C0.259278 4.9794 0.914831 3.39675 2.08172 2.22986C3.24862 1.06296 4.83126 0.40741 6.4815 0.40741H27.2222ZM35.5185 8.70371H14.7778C13.1276 8.70371 11.5449 9.35926 10.378 10.5262C9.21113 11.693 8.55557 13.2757 8.55557 14.9259V27.3704C8.55557 29.0206 9.21113 30.6033 10.378 31.7701C11.5449 32.937 13.1276 33.5926 14.7778 33.5926H35.5185C37.1688 33.5926 38.7514 32.937 39.9183 31.7701C41.0852 30.6033 41.7408 29.0206 41.7408 27.3704V14.9259C41.7408 13.2757 41.0852 11.693 39.9183 10.5262C38.7514 9.35926 37.1688 8.70371 35.5185 8.70371ZM29.2963 21.1481C29.2963 22.2483 28.8593 23.3034 28.0813 24.0813C27.3034 24.8593 26.2483 25.2963 25.1482 25.2963C24.048 25.2963 22.9929 24.8593 22.215 24.0813C21.4371 23.3034 21 22.2483 21 21.1481C21 20.048 21.4371 18.9929 22.215 18.215C22.9929 17.437 24.048 17 25.1482 17C26.2483 17 27.3034 17.437 28.0813 18.215C28.8593 18.9929 29.2963 20.048 29.2963 21.1481Z" fill="url(#paint0_linear_18_767)"/>
			<defs>
			<linearGradient id="paint0_linear_18_767" x1="7.82101" y1="49.8395" x2="54.1833" y2="4.71226" gradientUnits="userSpaceOnUse">
			<stop stopColor="#982DEC"/>
			<stop offset="0.572917" stopColor="#DC8DF8"/>
			<stop offset="0.895833" stopColor="#A9C4F3"/>
			</linearGradient>
			</defs>
		</svg>
	);
}

function WalletIcon(props: any) {
	return (
		<svg
			{...props}
			width="38" 
			height="34" 
			viewBox="0 0 38 34" 
			fill="none"
		>
			<path d="M33.9333 7.66662V3.93328C33.9333 1.87435 32.2589 0.199951 30.1999 0.199951H5.93325C2.84579 0.199951 0.333252 2.71248 0.333252 5.79995V28.1999C0.333252 32.3085 3.68205 33.7999 5.93325 33.7999H33.9333C35.9922 33.7999 37.6666 32.1255 37.6666 30.0666V11.4C37.6666 9.34102 35.9922 7.66662 33.9333 7.66662ZM30.1999 24.4666H26.4666V17H30.1999V24.4666ZM5.93325 7.66662C5.45262 7.64512 4.99881 7.43906 4.6663 7.09134C4.33379 6.74363 4.14822 6.28106 4.14822 5.79995C4.14822 5.31884 4.33379 4.85627 4.6663 4.50856C4.99881 4.16084 5.45262 3.95478 5.93325 3.93328H30.1999V7.66662H5.93325Z" fill="url(#paint0_linear_18_764)"/>
			<defs>
			<linearGradient id="paint0_linear_18_764" x1="7.13881" y1="50.2499" x2="53.6098" y2="10.0428" gradientUnits="userSpaceOnUse">
			<stop stopColor="#982DEC"/>
			<stop offset="0.572917" stopColor="#DC8DF8"/>
			<stop offset="0.895833" stopColor="#A9C4F3"/>
			</linearGradient>
			</defs>
		</svg>
	);
}