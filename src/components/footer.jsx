import React from "react";
import {BiGitRepoForked} from "react-icons/bi";

function Footer() {
  return (
    <footer className="flex p-4  text-black">
      <div className=" lg:w-1/2 mx-auto flex justify-between text-sm">
        <span className="mr-8">
          Made with ❤️ by {/* Throw some respect on my name, homie! 😅 😂  */}
          <a href="https://twitter.com/priyankarpal" target="_blank">
            html dev
          </a>
        </span>
          <a
            className="flex flex-row items-center space-x-2"
            href="https://github.com/priyankarpal/Portfolio"
            target="_blank"
          >
            <p className="hidden lg:visible"> Contribute here</p> <BiGitRepoForked  />
          </a>
      </div>
    </footer>
  );
}

export default Footer;
