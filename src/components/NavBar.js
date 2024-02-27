import React from 'react'

const NavBar = () => {
  return (
    
    <header className="min-w-[1000px] ">
        <div className="flex bg-amazonclone text-white h-[60px]">
            {/*left*/}
            <div className="flex items-center">
                <img className="h-[35px] w-[100px] m-2" src={"../amazon_clone/images/amazon.png"}/>
                <div className="pl-4 pr-4">
                    <div className="text-xs xl:text-sm">Deliver to</div>
                    <div className="text-sm xl:text-base font-bold">India</div>
                </div>
            </div>
            {/*Middle*/}
            <div className="flex">Right</div>
            {/*Right*/}
            <div className="flex items-center">
            <div className="pl-4 pr-4">
                    <div className="text-xs xl:text-sm">Hello , Sign in</div>
                    <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
                </div>
                <div className="pl-4 pr-4">
                    <div className="text-xs xl:text-sm">Returns</div>
                    <div className="text-sm xl:text-base font-bold">& Orders</div>
                </div>
                <div className="flex pl-3 pr-3">
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar