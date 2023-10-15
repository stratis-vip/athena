const Section = ({ children, title }) => {
	return (
		<div className="flex flex-col ">
			<h1 className=" text-primary
			sm:mt-10  sm:text-3xl font-bold sm:mx-4 mx-2 text-center">
				{title}
			</h1>
			<div>{children}</div>
		</div>
	);
};

export default Section;
