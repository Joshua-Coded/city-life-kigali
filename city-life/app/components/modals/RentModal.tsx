'use client'

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal"
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";


enum STEPS{
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,

}

const RentModal = () => {
    
    // CONTROLS FOR OUR steps
    const [step, setStep] = useState(STEPS.CATEGORY);

    // connecting our categories

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        },

        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathRoomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',
        }
    })

    const category = watch("category");

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
          
        });
    };

    // FUNCTIONS FOR GOING BACK AND FORT

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onForward = () => {
        setStep((value) => value + 1);
    }

    // our actions label

    const actionLabel = useMemo(() => {
            if (step === STEPS.PRICE){
                return 'Create';
            }

            return 'Next';
    }, [step])


    // secondary action label
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY){
            return undefined;
        }

        return 'Back';
    }, [step])

    const rentModal = useRentModal();

// OUR DYNAMIC BODY CONTENTS
let bodyContent = (
    <div className="flex flex-col gap-8">
        <Heading
        title="Which of these best describe your place?"
        subtitle="Pick a category"
        />

        <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-3
        max-h-[50vh]
        overflow-y-auto
        ">
                {categories.map((item) => (
                    <div
                     key={item.label}
                     className="col-span-1"
                     >
                        <CategoryInput  
                        onClick={(category) => setCustomValue('category', category)}
                        selected={category === item.label}
                        label={item.label}
                        icon={item.icon}
                        />
                    </div>
                ))}
        </div>
    </div>
)

    return (

        <Modal
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        title="City Life Your Home!"
        body={bodyContent}
        />
    )
}

export default RentModal;