import React from "react";
import BestTime from "./BestTime";
import Footer from "./Footer";
function PhotoCart({ image }) {
  return (
    <>
      <img src={image} className="photo-image" alt="" />
    </>
  );
}

const Photos = () => {
  return (
    <>
      <div className="parent">
        <h1 className="parent-para">
          <span>Gallery</span>
        </h1>
      </div>
      <div className="photo-container">
        <PhotoCart image="https://fastread.in/images/uploads/earth-day-plant-a-tree.jpg" />
        <PhotoCart image="https://vidhyashram.edu.in/wp-content/uploads/2018/09/IMG_7064.jpg" />
        <PhotoCart image="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-8isktjhdrv232hr6bhpf34fde7-20180909010837.Medi.jpeg" />
        <PhotoCart image="https://theindianschool.in/web/wp-content/uploads/2015/08/The-Times-of-India-Green-Drive-3.jpg" />
        <PhotoCart image="https://www.neallandscapes.co.uk/wp-content/uploads/2022/09/kids-planting-and-caring-for-different-plants-at-school-1.jpg" />
        <PhotoCart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhnYnYWBOt88RtUACutvAEr2GL2c_FzNOgg&usqp=CAU" />
        <PhotoCart image="https://wp-cpr.s3.amazonaws.com/uploads/2019/07/planting_trees.jpg" />
        <PhotoCart image="https://treesmatter.org/resources/Pictures/trees%20matter%20pics/IMG_3785.jpg" />
        <PhotoCart image="https://eleutheranews.com/wp-content/uploads/2018/03/Treeplanting1.jpg" />
        <PhotoCart image="https://img.freepik.com/premium-photo/indian-school-child-doing-tree-plantation_75648-8099.jpg" />
        <PhotoCart image="https://media.istockphoto.com/id/1395727601/photo/group-of-teenager-village-school-kids-planting-tree-while-looking-at-camera-concept-of.jpg?s=1024x1024&w=is&k=20&c=7eMBXqxfy_hDihtXkwrP-OrnnkRokjPrsrDvA7wFiKk=" />
        <PhotoCart image="https://resetfest.com/wp-content/uploads/2019/11/Educators_And_Enviornmental_Crisis_Classroom_COVER.jpg" />
        <PhotoCart image="https://www.sciencealert.com/images/articles/processed/PlantingTrees_web_1024.jpg" />
        <PhotoCart image="https://www.myplantmytaste.com/wp-content/uploads/2020/07/plant-tree.jpg" />
        <PhotoCart image="https://www.plt.org/wp-content/uploads/2018/04/shutterstock_683779825.jpg" />
        <PhotoCart image="https://cdn.shopify.com/s/files/1/0019/5952/articles/could-global-co2-levels-be-reduced-by-planting-trees-764601_1024x1024.jpg?v=1674682466" />
        <PhotoCart image="https://treecanada.ca/wp-content/uploads/2022/11/5-Montreal_2021-1-1.jpeg" />
        <PhotoCart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXeYNSvK8JP6iK8gACjU93giXiLb7273xkw&usqp=CAU" />
        <PhotoCart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgChZ4qp5v-vCiX8nHJaoeiUYmqW904dap9ScJkUHuqp6mx1qQDfLmmRrZNrQxHTXtDk&usqp=CAU" />
        <PhotoCart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ui3GLR0WzXURgWYhXLra3MINmiJs6Ujpi3DE8a_Mj8B0C67Yup7GF_Z4Nn0sotjwCx4&usqp=CAU" />
        <PhotoCart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDA8HQffSCumrk3gfpTtczPVoXmsBnNQVWgy4abX_SzCO5eDM2dBBBwHMcvihJJpXfQ8&usqp=CAU" />
        <PhotoCart image="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/12/03/76638.jpg" />
        <PhotoCart image="https://greentumble.com/wp-content/uploads/2015/10/plant-a-tree.jpg" />
        <PhotoCart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOl2F9JJXGU00rN2dVsPCumKEBEmI73uq_XhRXb1WdOEC6HwUsbWf1OZw5kgjk6-vClc&usqp=CAU" />
        <PhotoCart image="https://s01.sgp1.cdn.digitaloceanspaces.com/article/175195-ocpzkjixlq-1654077716.jpg" />
        <PhotoCart image="https://media.angi.com/s3fs-public/child-parent-plant-tree_1500x844.jpeg" />
      </div>
      <BestTime />
      <Footer />
    </>
  );
};

export default Photos;
