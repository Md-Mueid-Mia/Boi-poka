import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedReadList = localStorage.getItem("readList");
  if (storedReadList) {
    return JSON.parse(storedReadList);
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the read list");
    toast.warning("Already exists in the read list", {
      position: "top-center",
      autoClose: true,
    });
  } else {
    storedList.push(id);
    localStorage.setItem("readList", JSON.stringify(storedList));
    console.log(id, "added to the read list");
    toast.success("This book is added to your read list.", {
      position: "top-center",

      autoClose: true,
    });
  }
};

const getStoredWishList = () => {
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the wish list");
  } else {
    storedList.push(id);
    localStorage.setItem("wishList", JSON.stringify(storedList));
    console.log(id, "added to the wish list");
  }
};

export {
  addToStoredReadList,
  addToStoredWishList,
  getStoredReadList,
  getStoredWishList,
};
