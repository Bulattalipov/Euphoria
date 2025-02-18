import { defineStore } from "pinia";
import { reactive } from "vue";
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';

export const useFilteringCatalogs = defineStore('filteringCatalogs', () => {


  const db = getFirestore();

  return {

  }
})