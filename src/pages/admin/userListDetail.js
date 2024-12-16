import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../redux/action/user.action';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

function UserListDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const role = localStorage.getItem('role');
    const { isWebsite, userList, isLoading, error } = useSelector(
        (state) => state.userReducer
    );
    const roleUser = isWebsite;
    useEffect(() => {
        dispatch(getUserId(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Hm... Ada yang salah nih!, ${error.message}`,
                confirmButtonText: 'OK',
            });
        }
    }, [error]);

    if (role === roleUser) {
        return (
            <main className="container col-f">
                {isLoading ? (
                    <div className="container col-f f-center-c list-container">
                        <div className="custom-loader"></div>
                    </div>
                ) : (
                    <div className="card container col-f fj-center">
                        <h1>Detail Data {userList.nama}</h1>
                        <div className='container col-f'>
                            <div className='container col-f f-1 f-center-c m-b1'>
                                <img className="detail-img full-width" src={`${userList.foto_profil}`} alt="" />
                            </div>
                            <div className='container col-f'>
                                <h4>Nama</h4>
                                <div className='text-bg'>
                                    <p>{userList.nama}</p>
                                </div>
                                <h4>Nomor Telepon</h4>
                                <div className='text-bg'>
                                    <p>{userList.no_telp}</p>
                                </div>
                                <h4>Alamat</h4>
                                <div className='text-bg'>
                                    <p>{userList.alamat}</p>
                                </div>
                                <h4>Tentang</h4>
                                <div className='text-bg'>
                                    <p>{userList.tentang === null ? (<p>Data Kosong</p>) : (userList.tentang)}</p>
                                </div>
                                <h4>Email</h4>
                                <div className='text-bg'>
                                    <p className='cut-text'>{userList.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        );
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oow...',
            text: 'Akses Dilarang!',
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCancelButton: false,
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `/user/login`;
            }
        });
    }
}

export default UserListDetail;
