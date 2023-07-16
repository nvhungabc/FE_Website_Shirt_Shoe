import { getProducts } from "../../../store/actions/actionProduct";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { Item } from '../..';
import Loading from "../../Loading/Loading";

const ListProductNew = () => {
    const dispatch = useDispatch();
    const dataProducts = useSelector((state: RootState) => state.products);
    const { products, isLoading, error } = dataProducts;

    const featuredProducts = products.filter((product) => product.featured);
    console.log(featuredProducts);

    useEffect(() => {
        dispatch(getProducts() as never);
    }, [dispatch]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-5">
            {isLoading ? (
                <Loading />
            ) : error ? (
                "Error"
            ) : featuredProducts && featuredProducts.length > 0 ? (
                featuredProducts.map((product, index) => <Item key={index} product={product} />)
            ) : null}
        </div>
    );
};

export default ListProductNew;
