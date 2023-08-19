import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items,img, title}) => {
  return (
    <section className="max-w-screen-xl mx-auto mb-32">
        
     { title && <Cover img={img} height={"500px"} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        { items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)}
       
      </div>
    </section>
  );
};

export default MenuCategory;
