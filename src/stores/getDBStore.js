import { defineStore } from "pinia";
import { reactive } from "vue";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const useGetDBStore = defineStore('getDBStore', () => {
  const db = getFirestore();

  const categoriesWomenData = reactive([]);
  const categoriesMenData = reactive([]);
  const colors = reactive([]);
  const sizes = reactive([]);
  const catalog = reactive([]);

  function getCategoriesWomen() {
    const colRefCategorisWomen = collection(db, 'categories_women');
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
    const colRefCategorisMen = collection(db, 'categories_men');
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

  function getColors() {
    const colRefColors = collection(db, 'colors');
    getDocs(colRefColors)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          colors.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getSizes() {
    const colRefSizes = collection(db, 'sizes');
    getDocs(colRefSizes)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          sizes.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getCatalog() {
    const colRefCatalog = collection(db, 'catalog');
    getDocs(colRefCatalog)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          catalog.push({ id: doc.id, ...doc.data() });
        });
        console.log(catalog);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return {
    categoriesWomenData,
    categoriesMenData,
    colors,
    sizes,
    catalog,
    getCategoriesWomen,
    getCategoriesMen,
    getColors,
    getSizes,
    getCatalog
  }

})