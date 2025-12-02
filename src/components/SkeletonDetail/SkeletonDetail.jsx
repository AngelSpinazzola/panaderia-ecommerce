import "./SkeletonDetail.css";

export const SkeletonDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="skeleton-detail-image"></div>

        <div className="product-detail-info">
          <div className="skeleton-category"></div>

          <div className="skeleton-detail-title"></div>

          <div className="skeleton-detail-description">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>

          <div className="skeleton-detail-price"></div>

          <div className="skeleton-detail-actions">
            <div className="skeleton-btn skeleton-btn-back"></div>
            <div className="skeleton-btn skeleton-btn-add"></div>
          </div>
        </div>
      </div>
    </div>
  );
};