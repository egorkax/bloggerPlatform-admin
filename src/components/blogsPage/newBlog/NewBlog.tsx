import React from 'react';
import s from "./newBlog.module.css";
import HeaderIcon from '../../../assets/icons/Header.svg'
import logoIcon from '../../../assets/icons/Ava.svg'
import {Line} from "../../../common/Line/Line";
import {BackTo} from "../../../common/BackTo/BackTo";
import {Button} from "../../../common/Button/Button";
import {Input} from "../../../common/Input/Input";
import {useAppDispatch} from "../../../reducers/store";
import {useFormik} from "formik";
import {createBlog} from "../../../reducers/blogs-reducer";
import {useNavigate} from "react-router-dom";

type Error = {
    blogName?: string
    webSite?: string
    blogDescription?: string
}
type NewBlogPropsType = {}
export const NewBlog = (props: any) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            blogName: '',
            webSite: '',
            blogDescription: '',

        },
        validate: (values) => {
            const errors: Error = {}
            if (!values.blogName) {
                errors.blogName = 'Required'
            }
            if (!values.webSite) {
                errors.webSite = 'Required'
            }
            // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.webSite)) {
            //     errors.webSite = 'Invalid  address'
            // }
            if (!values.blogDescription) {
                errors.blogDescription = 'Required'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(createBlog({
                name: values.blogName,
                description: values.blogDescription,
                websiteUrl: values.webSite
            }))
            navigate('/blogs')
        }
    })
    const blogNameError = formik.errors.blogName && formik.touched.blogName ? formik.errors.blogName : ''
    const websiteError = formik.errors.webSite && formik.touched.webSite ? formik.errors.webSite : ''
    const blogDescError = formik.errors.blogDescription && formik.touched.blogDescription ? formik.errors.blogDescription : ''


    return (
        <div>
            <div className={s.header}>
                <h2>Blogs</h2>
                <img src={HeaderIcon} className={s.icon}/>
                <span className={s.blogName}>{props.actionName}</span>
            </div>
            <Line long={true}/>
            <BackTo title={"blogs"}/>
            <div className={s.blockLogo}>
                <img src={logoIcon} className={s.logo}/>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <Input
                    name='blogName'
                    id='blogName'
                    type='text'
                    label='Blog Name'
                    error={blogNameError}
                    value={formik.values.blogName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <Input
                    name='webSite'
                    id='webSite'
                    type='text'
                    label='Website'
                    error={websiteError}
                    value={formik.values.webSite}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <Input
                    name='blogDescription'
                    id='blogDescription'
                    type='text'
                    label='Blog Description'
                    error={blogDescError}
                    value={formik.values.blogDescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className={s.blockButton}>
                    <Button type={"submit"} superClassName={"editButton"}>
                        Add blog
                    </Button>
                </div>
            </form>


        </div>
    );
};

