import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
const EditProfile = () => {

    const {updateUser,setUser,user} = use(AuthContext)
    const navigate = useNavigate()

    const handleUpdate = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const photoURL = form.PhotoURL.value;

  updateUser({ displayName: name, photoURL })
    .then(() => {
      setUser({ ...user, displayName: name, photoURL });
      toast.success("Update Successful!", { autoClose: 2000 });
    
      form.reset();
          navigate("/")
    })
    .catch((err) => {
      console.log(err.code);
    });
};

    return (
     <div className="flex items-center justify-center  w-11/12">
      <div className="bg-[#f6b076] shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Update Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <fieldset className="fieldset">
            <label className="label">Name</label>
          <input
            required
            name="name"
            type="text"
            className="input text-black w-full"
            placeholder="Name"
          />
          <label className="label">Photo URL</label>
          <input
            required
            name="PhotoURL"
            type="text"
            className="input text-black w-full"
            placeholder="Photo URL"
          />
        
          <button type='submit' className='btn bg-[#F2994A] text-white mt-5'>Update</button>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default EditProfile;