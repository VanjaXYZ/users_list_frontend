import { handleSubmit } from "../actions/createUser";

const CreateUserForm = () => {
  return (
    <form className="flex flex-col gap-4" action={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="px-2 py-1 text-black"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="px-2 py-1 text-black"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        className="px-2 py-1 text-black"
      />
      <button type="submit" className="bg-white/20 hover:bg-white/40">
        Submit
      </button>
    </form>
  );
};

export default CreateUserForm;
