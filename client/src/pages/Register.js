import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    color: 'Black',
    breed: 'Abyssinian',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        const newId = result.id; // Assuming the API returns the inserted ID
        navigate(`/success/${newId}`);
      } else {
        console.error('Failed to register');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="text-bg-dark" style={{ minHeight: '100vh' }}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="50"
              fill="currentColor"
              className="bi bi-peace"
              viewBox="0 0 16 16"
              style={{ color: 'azure' }}
            >
              <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018m4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691M7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path>
            </svg>
            <span className="fs-4">Snuggly Cats</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/snuggleboard">
                  Snuggle board
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/information">
                  My information
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="px-4 py-5 my-5 text-center">
        <h1>Register here if you want to get snuggled :3</h1>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          {/* Row for form and image */}
          <div className="row align-items-center">
            {/* Form */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-secondary text-white">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Name:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="color" className="form-label">Color</label>
                  <select id="color" name="color" value={formData.color} onChange={handleChange} className="form-control">
                  <option selected>Black</option>
                        <option selected>White</option>
                        <option selected>Gray (Blue)</option>
                        <option selected>Brown</option>
                        <option selected>Orange (Ginger)</option>
                        <option selected>Cream</option>
                        <option selected>Chocolate</option>
                        <option selected>Lavender (Lilac)</option>
                        <option selected>Cinnamon</option>
                        <option selected>Fawn</option>
                        <option selected>Tabby (Classic)</option>
                        <option selected>Tabby (Mackerel)</option>
                        <option selected>Tabby (Spotted)</option>
                        <option selected>Tabby (Ticked)</option>
                        <option selected>Solid</option>
                        <option selected>Tuxedo</option>
                        <option selected>Calico</option>
                        <option selected>Tortoiseshell</option>
                        <option selected>Torbie (Tortoiseshell Tabby)</option>
                        <option selected>Pointed (Colorpoint)</option>
                        <option selected>Lynx Point</option>
                        <option selected>Bicolor</option>
                        <option selected>Tricolor</option>
                        <option selected>Smoke</option>
                        <option selected>Shaded</option>
                        <option selected>Shell (Chinchilla)</option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="breed" className="form-label">Breed</label>
                  <select id="breed" name="breed" value={formData.breed} onChange={handleChange} className="form-control">
                  <option selected>Abyssinian</option>
                        <option selected>American Shorthair</option>
                        <option selected>Arabian Mau</option>
                        <option selected>Australian Mist</option>
                        <option selected>Bengal</option>
                        <option selected>Bombay</option>
                        <option selected>British Shorthair</option>
                        <option selected>Burmese</option>
                        <option selected>Chartreux</option>
                        <option selected>Cornish Rex</option>
                        <option selected>Devon Rex</option>
                        <option selected>Egyptian Mau</option>
                        <option selected>European Shorthair</option>
                        <option selected>Havana Brown</option>
                        <option selected>Japanese Bobtail</option>
                        <option selected>Korat</option>
                        <option selected>Manx</option>
                        <option selected>Ocicat</option>
                        <option selected>Oriental Shorthair</option>
                        <option selected>Russian Blue</option>
                        <option selected>Scottish Fold</option>
                        <option selected>Siamese</option>
                        <option selected>Singapura</option>
                        <option selected>Snowshoe</option>
                        <option selected>Sphynx</option>
                        <option selected>Tonkinese</option>
                        <option selected>Turkish Shorthair</option>
                        <option selected>American Curl</option>
                        <option selected>Balinese</option>
                        <option selected>Birman</option>
                        <option selected>Cymric (long-haired Manx)</option>
                        <option selected>Himalayan</option>
                        <option selected>Javanese</option>
                        <option selected>Maine Coon</option>
                        <option selected>Norwegian Forest Cat</option>
                        <option selected>Persian</option>
                        <option selected>Ragdoll</option>
                        <option selected>Siberian</option>
                        <option selected>Somali</option>
                        <option selected>Turkish Angora</option>
                        <option selected>Turkish Van</option>
                        <option selected>Lykoi</option>
                        <option selected>Munchkin</option>
                        <option selected>Savannah</option>
                        <option selected>Chausie</option>
                        <option selected>Cheetoh</option>
                        <option selected>Serengeti</option>
                        <option selected>Toyger</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

            {/* Image */}
            <div className="col-md-6">
              <div className="p-4 p-md-5 border rounded-3 bg-secondary text-white">
                <h2>Here is an example of a good snuggle!</h2>
                <img src="/images/jatsikidaloki.png" alt="Jatsi Kidaloki" className="img-fluid img-thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

