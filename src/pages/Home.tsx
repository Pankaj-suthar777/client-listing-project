const Home = () => {
  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{ fontFamily: "Platypi" }}
    >
      <div className="xl:w-[1200px] max-w-6xl p-2">
        <img
          className="h-auto sm:h-[500px]  w-full sm:object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image description"
        />
      </div>
      <div className="flex flex-col gap-x-8 mt-10 justify-center items-center">
        <h1 className="sm:text-4xl text-3xl font-medium mb-10 text-center">
          Main Street Renewal welcomes you home
        </h1>
        <p className="max-w-[1000px] text-center sm:text-lg text-sm px-4">
          At Main Street Renewal, we provide quality homes, convenient
          self-tours, and a team of customer service experts. Your only task is
          finding what you love.
        </p>
      </div>
      <div className="grid md:grid-cols-3 max-w-6xl gap-8 mt-[100px]">
        <div className="flex place-items-center flex-col gap-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1969/1969501.png"
            className="sm:h-16 sm:w-16 h-[90px]"
          />
          <p className="text-center">
            Each home has been renovated to increase the functionality and
            aesthetic. This process includes neutral colors, stylish fixtures
            and an appliance package.
          </p>
        </div>

        <div className="flex place-items-center flex-col gap-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2607/2607179.png"
            className="sm:h-16 sm:w-16 h-[90px]"
          />
          <p className="text-center">
            Each home has been renovated to increase the functionality and
            aesthetic. This process includes neutral colors, stylish fixtures
            and an appliance package.
          </p>
        </div>

        <div className="flex place-items-center flex-col gap-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/263/263115.png"
            className="sm:h-16 sm:w-16 h-[90px]"
          />
          <p className="text-center">
            Each home has been renovated to increase the functionality and
            aesthetic. This process includes neutral colors, stylish fixtures
            and an appliance package.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-28 gap-8 items-center justify-center w-screen md:h-[200px] md:p-0 py-8 mt-[100px] place-items-center bg-[#f5e3e7]">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3566/3566861.png"
            className=""
          />
        </div>
        <p className="text-4xl max-w-[350px] text-center">
          Ready to find your new home?
        </p>
      </div>
      <div className="mt-[70px] mb-[90px] p-4">
        <h1
          className="text-4xl text-center
        "
          style={{ fontFamily: "Platypi" }}
        >
          Why Main Street Renewal?
        </h1>
      </div>
      <div className="grid md:grid-cols-2 max-w-7xl gap-8  p-4">
        <div className="flex flex-col gap-y-12 justify-center">
          <div className="flex flex-col gap-y-4 justify-center">
            <div className="flex gap-4 items-center ">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png"
              />
              <h1 className="text-xl">Accessible</h1>
            </div>

            <p>
              Our rent prices are often less than the cost of a mortgage, and
              most maintenance is free. Feel confident in knowing our prices are
              highly competitive.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-4 items-center">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png"
              />
              <h1 className="text-xl">Accessible</h1>
            </div>

            <p>
              Our rent prices are often less than the cost of a mortgage, and
              most maintenance is free. Feel confident in knowing our prices are
              highly competitive.
            </p>
          </div>
        </div>
        <img
          src="https://amherst-prod.imgix.net/retail/home/house-554.jpg?ar=4:3&amp;fit=crop&amp;w=1600&amp;auto=compress"
          className=" object-cover"
        />
      </div>
      <div className="grid md:grid-cols-2 max-w-7xl gap-8 p-4">
        <img
          src="https://amherst-prod.imgix.net/retail/home/girl-with-dog-554.jpg?ar=4:3&amp;fit=crop&amp;w=1600&amp;auto=compress"
          className=" object-cover "
        />
        <div className="flex flex-col gap-y-12 items-center justify-center">
          <div className="flex flex-col gap-y-4 justify-center">
            <div className="flex gap-4 items-center">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png"
              />
              <h1 className="text-xl"> Well-maintained</h1>
            </div>

            <p>
              We offer modern home renovations. We pride ourselves on providing
              our Residents with a beautiful home.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 justify-center">
            <div className="flex gap-4 items-center">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png"
              />
              <h1 className="text-xl">Trustworthy</h1>
            </div>

            <p>
              We are a national organization with high standards in property
              management. Our customer team is here for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
