import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import  Input  from "./Input"
import Button  from "../components/Button"
import generate from "../codegenerator/codegenerator"
import { useNavigate } from 'react-router-dom'
import appwriteService from "../appwrite/config"
import { refreshUrls } from '../store/authThunks'

function AddUrl() {
    const { register, handleSubmit } = useForm();
    const generatedCode = generate();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth?.userData);
    const idd = userData.userData.$id;
    const [error,setError]=useState(null)
    
    
    

    const submit = async (data) => {
        try {
            const document = await appwriteService.createUrl({
                ...data,
                userId:idd,
            });
            if (document) {
                dispatch(refreshUrls())
                navigate("/")
            }
        } catch (error) {
            console.log(error.message);
            setError(error.message)
        }
    }

    return (
        <div className="w-full py-8 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-lg bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="mb-6">
                    <h2 className="text-center text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                        Shorten a URL
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Enter your long URL to get a short and shareable link.
                    </p>
                </div>

                {error && <p className="text-red-600 dark:text-red-500 mb-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit(submit)} className="space-y-6">
                    <div>
                        <Input
                            label="Your Long URL:"
                            type="url"
                            placeholder="https://example.com/very-long-url-to-shorten"
                            {...register("url", {
                                required: "URL is required",
                            })}
                        />
                    </div>
                    <div>
                        <Input
                            label="Your Short Code:"
                            type="text"
                            readOnly
                            value={generate()}
                            {...register("code", {
                                required: true,
                            })}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Shorten
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddUrl