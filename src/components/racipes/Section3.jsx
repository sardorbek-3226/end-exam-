import React, { useState, useEffect } from "react";
import "./section3.css"
function Section3() {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    overwiev: "",
    servings: "",
    prepMinutes: "",
    cookMinutes: "",
    file: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // LocalStorage’dan olish
  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) {
      setRecipes(JSON.parse(saved));
    }
  }, []);

  const saveToLocal = (data) => {
    localStorage.setItem("recipes", JSON.stringify(data));
  };

  // input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // qo‘shish
  const handleSubmit = (e) => {
    e.preventDefault();

    // Fayldan vaqtinchalik URL olish
    const imageUrl = formData.file
      ? URL.createObjectURL(formData.file)
      : "/images/default.png";

    const newRecipe = {
      title: formData.title,
      overwiev: formData.overwiev,
      servings: formData.servings,
      prepMinutes: formData.prepMinutes,
      cookMinutes: formData.cookMinutes,
      imageUrl,
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    saveToLocal(updatedRecipes);

    // formani tozalash
    setFormData({
      title: "",
      overwiev: "",
      servings: "",
      prepMinutes: "",
      cookMinutes: "",
      file: null,
    });
    setIsModalOpen(false);
  };

  // delete qilish
  const handleDelete = (index) => {
    const updated = recipes.filter((_, i) => i !== index);
    setRecipes(updated);
    saveToLocal(updated);
  };

  return (
    <div className="section3">
      {/* 🔹 Modal ochuvchi button */}
      <button
        className="btn open-modal-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Ma’lumot qo‘shish
      </button>

      {/* 🔹 Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              ✖️
            </button>
            <form onSubmit={handleSubmit} className="recipe-form">
              <h2>Yangi Recept Qo‘shish</h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="overwiev"
                placeholder="Overwiev"
                value={formData.overwiev}
                onChange={handleChange}
                required
              />
              <div className="form-grid">
                <input
                  type="number"
                  name="servings"
                  placeholder="Servings"
                  value={formData.servings}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="prepMinutes"
                  placeholder="Prep Minutes"
                  value={formData.prepMinutes}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="cookMinutes"
                  placeholder="Cook Minutes"
                  value={formData.cookMinutes}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-btn">
                Yuborish
              </button>

              </form>
          </div>
        </div>
      )}

      {/* 🔹 Recipe list */}
      <div className="recipes-container">
        {recipes.map((recipe, idx) => (
          <div className="recipe-item" key={idx}>
            <div className="recipe-top">
              <div className="thumbnail">
                <img
                  src={recipe.imageUrl}
                  className="recipe-img"
                  alt={recipe.title}
                />
              </div>
            </div>

            <div className="recipe-info">
              <div className="description-container">
                <h3 className="title">{recipe.title}</h3>
                <p className="description">{recipe.overwiev}</p>
              </div>

              <div className="details-container">
                <div className="servings-container">
                  <span className="icon">
                    <img src="/images/icon-servings.svg" alt="" />
                  </span>
                  <span>Servings: {recipe.servings}</span>
                </div>
                <div className="prep-container">
                  <span className="icon">
                    <img src="/images/icon-prep-time.svg" alt="" />
                  </span>
                  <span>Prep: {recipe.prepMinutes} mins</span>
                </div>
                <div className="cook-container">
                  <span className="icon">
                    <img src="/images/icon-cook-time.svg" alt="" />
                  </span>
                  <span>Cook: {recipe.cookMinutes} mins</span>
                </div>
              </div>

              <div className="buttons">
                <button className="view-recipe-btn">View Recipe</button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(idx)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
