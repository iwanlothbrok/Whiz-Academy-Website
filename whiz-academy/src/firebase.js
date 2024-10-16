import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firestore
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const contactFormsCollection = collection(db, 'basicForm');
const courseFormsCollection = collection(db, 'joinCourseForm');
const feedbackFormsCollection = collection(db, 'feedback');
const csharpCourseCollection = collection(db, 'csharpBasicForm');

// function for submit
const contactSubmitHandle = async (formData) => {

    try {
        const docRef = await addDoc(contactFormsCollection, {
            FullName: formData.FullName,
            Email: formData.Email,
            Phone: formData.Phone,
        });
        // Handle success or show a success message to the user
        console.log('Form submitted successfully!');

        return { success: true, message: 'Form submitted successfully' };
    } catch (error) {
        // Handle errors, show an error message, or log them
        console.error('Error submitting form:', error);
        return { success: false, message: 'Form submission failed' };
    }
};


const courseSubmitHandle = async (formData) => {
    try {
        const docRef = await addDoc(courseFormsCollection, {
            Name: formData.FullName,
            Email: formData.Email,
            Language: formData.Language,
            Date: Timestamp.now(),
            Phote: formData.Phone
        });
        // Handle success or show a success message to the user
        console.log('Form submitted successfully!');

        return { success: true, message: 'Form submitted successfully' };
    } catch (error) {
        // Handle errors, show an error message, or log them
        console.error('Error submitting form:', error);
        return { success: false, message: 'Form submission failed' };
    }
};

const feedbackSubmitHandle = async (formData) => {
    try {
        const docRef = await addDoc(feedbackFormsCollection, {
            FeedbackLevel: formData.feedbackLevel,
            Name: formData.fullName,
            NewThings: formData.newThings,
            MentorFeedback: formData.mentorFeedback,
            Date: Timestamp.now()
        });
        // Handle success or show a success message to the user
        console.log('Form submitted successfully!');

        return { success: true, message: 'Form submitted successfully' };
    } catch (error) {
        // Handle errors, show an error message, or log them
        console.error('Error submitting form:', error);
        return { success: false, message: 'Form submission failed' };
    }
};

const csharpCourseSubmitHandle = async (formData) => {
    try {
        const docRef = await addDoc(csharpCourseCollection, {
            Email: formData.Email,
            FullName: formData.FullName,
            Phone: formData.Phone,
            PreviousExperience: formData.PreviousExperience,
            Date: Timestamp.now(),
            PreviousExperienceCheck: formData.PreviousExperienceCheck,
            LeadSource: formData.LeadSource
        });

        console.log('Form submitted successfully!');

        return { success: true, message: 'Form submitted successfully' };
    } catch (error) {

        console.error('Error submitting form:', error);
        return { success: false, message: 'Form submission failed' };
    }
};

export { contactSubmitHandle, courseSubmitHandle, feedbackSubmitHandle, csharpCourseSubmitHandle };