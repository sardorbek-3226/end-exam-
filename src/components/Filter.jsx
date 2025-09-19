import React, { useState, useRef, useEffect } from "react";
import "./filter.css"
function CustomSelect({ options, placeholder = "Select" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      style={{ position: "relative", width: "200px", fontFamily: "Arial, sans-serif" }}
      ref={containerRef}
    >
      <div className="inp"
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder}</span>
        {selected && (
          <button
            style={{
              marginLeft: "8px",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#ff4d4f",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelected("");
            }}
          >
            Clear
          </button>
        )}
        <span style={{ marginLeft: "8px" }}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            width: "100%",
            maxHeight: "200px",
            overflowY: "auto",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 100,
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor: selected === opt.value ? "#e0e0ff" : "#fff",
              }}
              onClick={() => {
                setSelected(opt.value);
                setIsOpen(false);
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  selected === opt.value ? "#e0e0ff" : "#fff")
              }
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const prepOptions = [
    { label: "0 minutes", value: "0" },
    { label: "5 minutes", value: "5" },
    { label: "10 minutes", value: "10" },
    { label: "15 minutes", value: "15" },
    { label: "20 minutes", value: "20" },
  ];
  const cookOptions = [
    { label: "0 minutes", value: "0" },
    { label: "5 minutes", value: "5" },
    { label: "10 minutes", value: "10" },
    { label: "15 minutes", value: "15" },
  ];

  const recipes = [
  
  ];

  const filteredRecipes = recipes.filter((r) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      r.title.toLowerCase().includes(lowerSearch) ||
      r.description.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <div
        className="input"
      >
        <div className="custom">
          <CustomSelect options={prepOptions} placeholder="Max Prep Time" />
          <CustomSelect options={cookOptions} placeholder="Max Cook Time" />
        </div>

        <input
          type="text"
          placeholder="Search by name or ingredient…"
          style={{
            width: "400px",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            color: "#333",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            transition: "border 0.2s, box-shadow 0.2s",
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={(e) =>
            (e.target.style.boxShadow = "0 0 0 2px rgba(107,91,149,0.3)")
          }
          onBlur={(e) =>
            (e.target.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)")
          }
        />
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((r) => (
            <div
              key={r.id}
              style={{
                padding: "16px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0" }}>{r.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>{r.description}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
