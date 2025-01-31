import { defineStore } from "pinia";
import { reactive } from "vue";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const useGetDBStore = defineStore('getDBStore', () => {
  const db = getFirestore();

  const colRefCategorisWomen = collection(db, 'categories_women');
  const colRefCategorisMen = collection(db, 'categories_men');
  const categoriesWomenData = reactive([]);
  const categoriesMenData = reactive([]);

  function getCategoriesWomen() {
    getDocs(colRefCategorisWomen)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          categoriesWomenData.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getCategoriesMen() {
    getDocs(colRefCategorisMen)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          categoriesMenData.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return {
    getCategoriesWomen,
    categoriesWomenData,
    getCategoriesMen,
    categoriesMenData
  }

})