'use client'

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';



const LoginModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
        .then(() => {
            registerModal.onClose();
        })
        .catch((error) => {
            toast.error('Something went wrong!!') 
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
                <Heading
                title='Welcome to City Life Kigali'
                subtitle='Create an Account!'
                />

                <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                />

                <Input
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                />
                
                <Input
                id='password'
                type='password'
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                />
                
        </div>
    );

    const footerContent = (
        <div className='flex flex-col gap-4  mt-3'>
<hr />
<Button 
outline
label='Continue with Google'
icon={FcGoogle}
onClick={() => {}}
/>

<Button 
outline
label='Continue with GitHub'
icon={AiFillGithub}
onClick={() => {}}
/>
<div
className='
text-neutral-500
text-center
mt-4
font-light'
>
<div className='justify-center flex flex-row gap-2'> 
    <div>Already Have An Account?</div>
    <div 
    onClick={registerModal.onClose}
    className='
    text-neutral-800
    cursor-pointer 
    hover:underline'
    >
    Login In
    </div>
</div>
</div>
        </div>
    )
    
    return (
            <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Register'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}            
            />
    )    
}

export default LoginModal