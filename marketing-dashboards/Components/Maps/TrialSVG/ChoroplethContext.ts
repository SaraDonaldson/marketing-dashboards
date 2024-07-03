'use client'
import React from "react";
import {createContext, useContext} from "react"


interface StateInfoViewCB {
    stateCode: string;
    showInfoView: boolean;
    setShowInfoView: (stateCode: string, showInfoView: boolean) => void;
  }
export const stateInfoContext= createContext<StateInfoViewCB>({
    stateCode: "",
    showInfoView: false,
    setShowInfoView: () => {}
  });