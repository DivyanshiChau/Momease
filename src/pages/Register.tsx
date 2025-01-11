import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Register = () => {
  const [role, setRole] = useState<'mother' | 'nanny' | null>(null);
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      {!isSignIn ? (
        !role ? (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-pink-800 text-center mb-8">
              Choose Your Role
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RoleCard
                title="I'm a Mother"
                description="Get personalized care and support through your journey"
                onClick={() => setRole('mother')}
                features={[
                  'Personalized care plans',
                  'Access to verified nannies',
                  'Mental health support',
                  'Nutrition guidance',
                  'Government scheme eligibility check'
                ]}
              />
              <RoleCard
                title="I'm a Nanny"
                description="Join our platform to provide care and support"
                onClick={() => setRole('nanny')}
                features={[
                  'Flexible work opportunities',
                  'Professional training',
                  'Verified profile badge',
                  'Direct client communication',
                  'Competitive compensation'
                ]}
              />
            </div>
            <div className="my-8 border-t border-pink-300"></div>
            <button
              onClick={() => setIsSignIn(true)}
              className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700"
            >
              Already have an account? Sign In
            </button>
          </div>
        ) : (
          <RegistrationForm role={role} onBack={() => setRole(null)} />
        )
      ) : (
        <SignInForm onBack={() => setIsSignIn(false)} />
      )}
    </div>
  );
};

const RoleCard = ({ title, description, features, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white p-8 rounded-lg shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <h2 className="text-2xl font-bold text-pink-800 mb-4">{title}</h2>
    <p className="text-pink-700 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-pink-600">
          <span className="mr-2">•</span>
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const RegistrationForm = ({ role, onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    language: '',
    phone: '',
    postpartumStage: '',
    medicalConditions: [],
    dietaryRestrictions: [],
    incomeRange: '',
    employed: false,
    maternityLeaveStatus: '',
    experience: '',
    motherTongue: '',
    aadharNumber: '',
    specializations: [],
    availability: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic with Supabase
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-8 text-pink-600 hover:text-pink-700"
      >
        ← Back to role selection
      </button>

      <form onSubmit={handleSubmit} className="space-y-8">
        {role === 'mother' ? (
          <MotherRegistrationForm
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <NannyRegistrationForm
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </form>
    </div>
  );
};

const SignInForm = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: Implement sign-in logic
    console.log('Sign In:', email, password);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <button onClick={onBack} className="mb-4 text-pink-600 hover:text-pink-700">← Back</button>
      <h2 className="text-2xl font-bold text-pink-800 mb-4">Sign In</h2>
      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label className="block text-pink-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-pink-200 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-pink-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-pink-200 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const MotherRegistrationForm = ({ step, setStep, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold text-pink-800">Basic Information</h2>
          <div>
            <label className="block text-pink-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-pink-200 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-pink-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-pink-200 rounded-md"
              required
            />
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold text-pink-800">Health Information</h2>
          <div>
            <label className="block text-pink-700 mb-2">Postpartum Stage</label>
            <select
              name="postpartumStage"
              value={formData.postpartumStage}
              onChange={handleChange}
              className="w-full p-3 border border-pink-200 rounded-md"
              required
            >
              <option value="">Select stage</option>
              <option value="first-trimester">First Trimester</option>
              <option value="second-trimester">Second Trimester</option>
              <option value="third-trimester">Third Trimester</option>
              <option value="postpartum">Postpartum</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full bg-pink-100 text-pink-600 py-3 rounded-md hover:bg-pink-200"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700"
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold text-pink-800">Financial Information</h2>
          <div>
            <label className="block text-pink-700 mb-2">Income Range</label>
            <select
              name="incomeRange"
              value={formData.incomeRange}
              onChange={handleChange}
              className="w-full p-3 border border-pink-200 rounded-md"
              required
            >
              <option value="">Select range</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label className="block text-pink-700 mb-2">Employed?</label>
            <input
              type="checkbox"
              name="employed"
              checked={formData.employed}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, employed: e.target.checked }))
              }
              className="mr-2"
            />
            Yes, I am employed
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-pink-100 text-pink-600 py-3 rounded-md hover:bg-pink-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const NannyRegistrationForm = ({ step, setStep, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold text-pink-800">Basic Information</h2>
          <div>
            <label className="block text-pink-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-pink-200 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-pink-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-pink-200 rounded-md"
              required
            />
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};
