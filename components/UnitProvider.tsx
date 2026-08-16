"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Unit = "ft" | "m";

type UnitContextType = {
  unit: Unit;
  setUnit: (unit: Unit) => void;
  convertFeet: (feet: number) => string;
  convertMetres: (metres: number) => string;
};

const UnitContext = createContext<UnitContextType | undefined>(undefined);

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnitState] = useState<Unit>("ft");

  useEffect(() => {
    const saved = localStorage.getItem("fogrod-unit");

    if (saved === "ft" || saved === "m") {
      setUnitState(saved);
    }
  }, []);

  const setUnit = (newUnit: Unit) => {
    setUnitState(newUnit);
    localStorage.setItem("fogrod-unit", newUnit);
  };

  // Convert a value that is stored in FEET
  const convertFeet = (feet: number) => {
    if (unit === "ft") {
      return `${feet}ft`;
    }

    const metres = feet * 0.3048;

    return `${metres.toFixed(2)}m`;
  };

  // Convert a value that is stored in METRES
  const convertMetres = (metres: number) => {
    if (unit === "m") {
      return `${metres}m`;
    }

    const feet = metres / 0.3048;

    return `${feet.toFixed(2)}ft`;
  };

  return (
    <UnitContext.Provider
      value={{
        unit,
        setUnit,
        convertFeet,
        convertMetres,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
}

export function useUnit() {
  const context = useContext(UnitContext);

  if (!context) {
    throw new Error("useUnit must be used inside UnitProvider");
  }

  return context;
}