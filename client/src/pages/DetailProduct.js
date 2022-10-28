import { DETAIL_COLOR, SIZE } from "assets/Const";
import axiosClient from "axios/configAxios";
import { AiOutlineShoppingCart, AiOutlineShopping } from "react-icons/ai";
import ButtonIcon from "components/button/ButtonIcon";
import Tag from "components/common/Tag";
import DropDownSize from "components/dropDown/DropDownSize";
import DetailsProductSlider from "components/slider/DetailsProductSlider";
import Title from "components/title/Title";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import formatPrice from "utils/formatPrice";
import HeadingXl from "../components/heading/HeadingXl";
import ProductFor from "modules/ProductFor";
const DetailProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [listImg, setListImg] = useState();
  const [color, setColor] = useState(DETAIL_COLOR[0]);
  const [size, setSize] = useState("L");
  const location = useLocation();
  useEffect(() => {
    if (!slug) return;
    const fechData = async () => {
      try {
        const { product } = await axiosClient.request({
          method: "get",
          url: "/v1/product",
          params: {
            slug,
          },
        });
        setProduct(product);
        if (product.imgSlider) {
          setListImg([product.img, ...product.imgSlider]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fechData();
  }, [slug]);
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleSetSize = (e) => {
    setSize(e.target.textContent);
  };
  if (!product || !listImg) return;
  return (
    <div className="container-fix min-h-[500px] py-10 px-2 border-t">
      <div className="flex justify-center w-full p-3 bg-white gap-x-10">
        <div className="h-[600px] w-2/5 overflow-hidden group cursor-pointer">
          <DetailsProductSlider listImg={listImg} />
        </div>
        <div>
          <HeadingXl className="text-2xl">{product.title}</HeadingXl>
          <p>SKU: HNATH024</p>
          <Title className="mt-3" title="Color:" />
          <div className="flex items-center mt-5 gap-x-2">
            {DETAIL_COLOR.map((item) => (
              <p
                key={item.id}
                onClick={() => setColor(item)}
                className={`${
                  item.color
                } w-6 h-6 rounded-full cursor-pointer outline-offset-1 outline-1 ${
                  color.id === item.id ? "outline" : ""
                } outline-gray-400`}
              ></p>
            ))}
            <Tag>{color.des}</Tag>
          </div>
          <Title className="mt-6 mb-3" title="Size:" />
          <DropDownSize data={SIZE} setSelect={handleSetSize} size={size} />
          <div className="my-5">
            <span className={`font-bold text-4xl ${color.text}`}>
              {formatPrice(product?.price)}đ
            </span>
          </div>
          <div className="flex mt-10 gap-x-2">
            <ButtonIcon
              className="min-w-[200px] w-full text-white  rounded-md bg-primary"
              icon={<AiOutlineShoppingCart />}
            >
              Add Card
            </ButtonIcon>
            <ButtonIcon
              className="w-full text-red-400 bg-red-200 border border-red-400 rounded-md"
              icon={<AiOutlineShopping />}
            >
              Buy Now
            </ButtonIcon>
          </div>
        </div>
      </div>
      <div className="mt-5 border-t border-slate-300">
        <ProductFor data={product.desc} />
      </div>
    </div>
  );
};

export default DetailProduct;
