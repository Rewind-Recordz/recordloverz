function Navbar() {
    return(
        <nav
      class="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-slate-600 border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div class="flex items-center justify-between text-blue-gray-900">
        <a href="#"
          class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
          <h1>Record Loverz</h1>
        </a>
        <div class="flex items-center gap-4">
          <div class="hidden mr-4 lg:block">
            <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center">
                  Add Album
                </a>
              </li>
              <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center">
                  Home
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
    );
}
export default Navbar;