import "./css/loading.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
function Loading(props) {
    return (
        <>
            <div className="loading">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading