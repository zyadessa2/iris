import SignupFormDemo from "@/components/Signupformdemo";

const ConatctUs = () => {


  return (
    <div id="contactUs" className="w-full mx-auto bg-black  overflow-hidden">
    
    <div className="my-16  mx-auto w-full max-w-2xl rounded-none  p-4 md:rounded-2xl md:p-8  border border-gray-800 px-4 py-8 shadow-blue-400 shadow-xl">
      <h2 className="text-xl font-bold text-neutral-200">
      Get in Touch
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-300">
      Have questions or want to work with us? Drop us a message below.
      </p>

      <SignupFormDemo/>
    </div>

    

  </div>
  );
};

export default ConatctUs;


