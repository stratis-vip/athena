import Section from "./section";
import { champTips } from "../data/champ-tips";

const Gwar = () => {
	return (
		<div>
			<Section title={"How to be a Champion of New Athena"}>
				<div className="flex  flex-col justify-center items-center">
					<div className="my-5 flex flex-col sm:text-xl">
						{champTips.map((tip) => (
							<div className="mx-3 sm:mx-20 my-1" key={tip.id}>
								{tip.text} {tip.link && <a className="text-red-400" href={tip.link} target="_blank" rel="noreferrer">here</a>}
							</div>
						))}
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Gwar;
