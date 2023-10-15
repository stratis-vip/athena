import { discord } from "../data/news";

const Communication = () => {
	return (
		<div className="flex flex-col items-center mt-3 sm:mt-10">
			<div className="sm:w-8/12 mx-3">
				<Para>
					Hero Wars chat isn't the best way to communicate as it's only provide
					the basics (for example it can't handle images and history).
				</Para>
				<Para>That's why we need alternative ways of communication.</Para>
				<Para>
					New Athena <b>recommends </b> the WeChat app because it has all the essentials
					of a modern messaging app and is not blocked anywhere.
				</Para>
				<Para>
					Only drawback of WeChat is the "funny" way of activation, as you need
					a resident of China to activate it.
				</Para>
				<div className="flex flex-col items-center mt-10 mb-10">
					<div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						<a href="https://www.wechat.com/" target="_blank" rel="noreferrer">
							Download WeChat App
						</a>
					</div>
				</div>
				<Para>
					So, when you install it, you need the help of Fight4Trump to activate
					it!
				</Para>
				<Para>
					New Athena, has a discord channel, even though is not so active! You
					can join it, or you can send private messages to our tema mates who
					have it installed or open to a web browser.
				</Para>
				<Para>Invitation to this channel is active from <b>{discord.start} to {discord.end}</b></Para>
				<div className="flex flex-col items-center mt-10">
					<div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						<a
							href={discord.link}
							target="_blank"
							rel="noreferrer"
						>
							Join Discord channel
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Communication;

const Para = ({ children }) => {
	return <p className="mt-1 text-xl">{children}</p>;
};
