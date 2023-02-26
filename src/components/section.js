const Section = ({ children, title }) => {
	return (
		<div className="flex flex-col ">
			<h1 className="mt-10 text-primary text-3xl font-bold mx-4 text-center">
				{title}
			</h1>
			<div>{children}</div>
		</div>
	);
};

export default Section;
