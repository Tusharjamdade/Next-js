'use client';

import config from "@/tailwind.config";
import { useRef, useState } from "react";

const ThemeToggle = () => {
	const [darkTheme, setDarkTheme] = useState(true);
	return (
		<div >
      <div className='bg-white dark:bg-black dark:text-white w-full h-screen'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequatur facere modi molestias maxime ducimus officiis, accusantium voluptates laudantium sint laboriosam provident enim labore eaque odit at? Corrupti, deleniti porro.
        Consequatur maiores enim nemo quaerat necessitatibus dolorem repellendus reprehenderit, ipsum dolorum et autem aut consequuntur voluptates deleniti libero voluptate eius sequi tempora facilis rem pariatur magnam sunt? Odit, similique sed?
        Suscipit officia cumque officiis consequatur, perspiciatis magnam quidem voluptates, possimus alias quis illo ipsa optio veniam, vel aliquam sint. Tempore perspiciatis possimus quo beatae quaerat inventore ullam velit iure amet.
        Vel blanditiis eos maxime iure esse! Ullam itaque distinctio consectetur possimus dignissimos aspernatur ducimus repellat officia dolor harum. Molestiae quidem excepturi quod aliquam delectus quis laboriosam eaque consectetur, voluptatibus nesciunt.
        Deserunt provident voluptatum eligendi asperiores necessitatibus deleniti iure ab molestias facere, tenetur accusamus, maiores voluptas error quas voluptatem quis iste? Nisi consequatur omnis veniam modi, commodi alias! Mollitia, laboriosam velit!
        Corporis ipsam, dicta repellat nihil hic, iusto tempora consequuntur saepe dolorem perspiciatis adipisci rerum alias architecto inventore quod, minima nobis rem quae similique impedit pariatur facere possimus? Quia, minima labore.
        Blanditiis hic quos placeat corrupti totam dolorum, libero facilis maxime ea quidem accusamus tempore eos asperiores accusantium, et incidunt vero impedit fuga. Sed atque aspernatur molestiae est magnam soluta totam?
        Cum dolores eos tempore, officia quod beatae. Vero necessitatibus accusamus sunt itaque maxime sit optio, dignissimos cupiditate omnis accusantium quos ab corrupti exercitationem animi non, excepturi sapiente cumqu
      </div>
      <button onClick={()=>{
        if(darkTheme){
          document.querySelector("body")?.classList.add("dark")
          setDarkTheme(!darkTheme)
        }else{
          document.querySelector("body")?.classList.remove("dark")
          setDarkTheme(!darkTheme)
        }
        	
      }} className="border dark:bg-white">Change Theme</button>
		</div>
	);
};

export default ThemeToggle;