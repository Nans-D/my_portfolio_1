import './Courses.css'

export const Courses = () => {
    return <div className='courses-container'>
        <div id='courses-title'>Courses</div>
        <div className='courses-card-container'>
            <div className='card-container'>
                <h3>WebForce3</h3>
                <p>Bootcamp in 2020</p>
            </div>
            <div className='card-container'>                
                <h3>Begin Javascript & React</h3>
                <p>Courses by Melvynx to learn React</p>
            </div>
            <div className='card-container'>                
                <h3>React - The Complete Guide 2023</h3>
                <p>Courses by Maximilian Schwarzmuller</p>
                <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Lesson Here</a>
            </div>
    </div>
</div>
}