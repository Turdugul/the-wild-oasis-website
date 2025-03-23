import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className='flex items-center gap-4 sm:gap-6 text-base sm:text-lg border border-primary-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-medium rounded-md hover:bg-primary-800 transition-colors'>
        <img
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          className='h-5 w-5 sm:h-6 sm:w-6'
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
