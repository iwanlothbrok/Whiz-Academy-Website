import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

// Dummy data for lectures, including YouTube video links
const lectures = [
    {
        id: 1,
        title: 'Introduction to JavaScript',
        progress: 100, // Progress as percentage
        videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
        description: 'In this lecture, you will learn the basics of JavaScript, including variables, loops, and functions.',
    },
    {
        id: 2,
        title: 'React Basics',
        progress: 50, // Progress as percentage
        videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        description: 'This lecture covers the fundamentals of React, including components, props, and state management.',
    },
    {
        id: 3,
        title: 'Advanced React Hooks',
        progress: 0, // Progress as percentage
        videoUrl: 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
        description: 'Learn advanced React concepts such as custom hooks and optimizing performance with useMemo and useCallback.',
    },
];

const LMSPage = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedLecture, setSelectedLecture] = useState(lectures[0]);
    const correctPassword = 'whizacademy2024';

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    const handleLectureSelect = (lecture) => {
        setSelectedLecture(lecture);
    };

    if (!isAuthenticated) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black to-green-950">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
                    <h2 className="text-2xl font-bold text-center mb-6">Enter Password</h2>
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 placeholder-gray-400 text-white"
                            placeholder="Enter password"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gradient-to-b from-black via-green-950 to-yellow-500 text-white">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-950 p-6 space-y-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-green-400">Lecture Navigation</h2>
                <ul className="space-y-4">
                    {lectures.map((lecture) => (
                        <li
                            key={lecture.id}
                            className={`cursor-pointer p-4 rounded-lg ${selectedLecture.id === lecture.id
                                ? 'bg-green-900'
                                : 'bg-gray-800'
                                } hover:bg-green-950 transition-all duration-300`}
                            onClick={() => handleLectureSelect(lecture)}
                        >
                            <div className="font-semibold">{lecture.title}</div>
                            <div className="text-sm text-gray-400">Progress: {lecture.progress}%</div>
                            <div className="w-full bg-gray-700 h-2 mt-1 rounded-full">
                                <div
                                    className="bg-green-400 h-full rounded-full"
                                    style={{ width: `${lecture.progress}%` }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-green-400">Current Lecture</h3>
                    <p className="text-sm">Name: {selectedLecture.title}</p>
                    <p className="text-sm">Progress: {selectedLecture.progress}%</p>
                </div>
            </div>

            {/* Main Content (Video Player) */}
            <div className="w-4/5 bg-gradient-to-br from-gray-900 via-gray-950 to-green-950 text-black p-10">
                <h2 className="text-2xl font-bold text-green-500 mb-4">{selectedLecture.title}</h2>
                <p className="mb-6 text-gray-700">{selectedLecture.description}</p>
                <div className="bg-black w-full h-4/5 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <ReactPlayer
                        url={selectedLecture.videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default LMSPage;
