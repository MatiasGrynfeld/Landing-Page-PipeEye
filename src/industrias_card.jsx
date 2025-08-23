export default function IndustriasCard({ img, type, children: paragraph }) {
    return (
        <div className="industrias-card">
            <h3 className="industrias-card-type">{type}</h3>
            <img src={img} className="industrias-card-img" />
            <p className="industrias-card-paragraph">{paragraph}</p>
        </div>
    );
}