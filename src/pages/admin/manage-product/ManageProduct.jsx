import React, { useState } from 'react';
import "./ManageProduct.scss";
import { useDeleteProductMutation, useGetProductQuery } from '../../../context/productApi';
import { FaRegHeart } from 'react-icons/fa6';
import { MdOutlineCreate } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import Loading from '../../../components/loading/Loading';
import EditModule from '../../../components/edit-module/EditModule';

const ManageProduct = () => {
    const [deleteLoading, setDeleteLoading] = useState({});
    const { data: dataGetProducts, isLoading: loadingGetProducts } = useGetProductQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [editModule, setEditModule] = useState(null)

    const onDelete = async (id) => {
        setDeleteLoading((prevState) => ({ ...prevState, [id]: true }));
        await deleteProduct(id);
        setDeleteLoading((prevState) => ({ ...prevState, [id]: false }));
    };

    const products = dataGetProducts?.map((el) => (
        <div key={el.id} className="card">
            <button className="card__like__btn">
                <FaRegHeart />
            </button>
            <div className="card__frame">
                <img src={el.image} alt="" />
            </div>
            <div className="card__content">
                <p className="card__category">{el.category}</p>
                <h3 className="card__title">{el.title}</h3>
                <div className="card__bottom">
                    <div className="card__price__wrapper">
                        <del className="card__old__price">{el.oldPrice}₽</del>
                        <p className="card__price">{el.price}₽</p>
                    </div>
                    <div className="card__actions__wrapper">
                        <button
                            onClick={() => setEditModule(el)}
                            className={`card__edit__btn ${deleteLoading[el.id] ? "card__edit__deleting__pr" : ""}`}>
                            <MdOutlineCreate />
                        </button>

                        <button
                            onClick={() => onDelete(el.id)}
                            className={`card__delete__btn ${deleteLoading[el.id] ? "deleting__product" : ""}`}>
                            {deleteLoading[el.id] ? (
                                <>deleting <FaRegTrashAlt /></>
                            ) : (
                                <FaRegTrashAlt />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {loadingGetProducts && <Loading />}

            <section id="manage-product">
                <div className="container manage__product">
                    <h1 className="manage__product__title">Manage Product</h1>
                    <div className="manage__product__wrapper">
                        {products}
                    </div>
                </div>
            </section>
            <EditModule product={editModule} setEditModule={setEditModule} />
        </>
    );
};

export default ManageProduct;
