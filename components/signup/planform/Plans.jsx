import styles from "./planform.module.css";
import { useRouter } from "next/router";
const Plans = () => {
    const router = useRouter();
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.rs200month}>Rs.200/month</div>
      <div className={styles.pResolution}>1080P Resolution</div>
      <img
        className={styles.streamingTvApp1Icon}
        alt=""
        src="/streamingtvapp-1@2x.png"
      />
      <div className={styles.frameItem} />
      <div className={styles.chooseYourPlan}>CHOOSE YOUR PLAN</div>
      <div className={styles.frameInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.halfYearly}>Half Yearly</div>
      <div className={styles.yearly}>Yearly</div>
      <div className={styles.rs9606months}>
        <p className={styles.p}>1200</p>
        <p className={styles.rs9606months1}>Rs.960/6months</p>
      </div>
      <div className={styles.rs14401year}>
        <p className={styles.p}>2400</p>
        <p className={styles.rs9606months1}>Rs.1440/1Year</p>
      </div>
      <div className={styles.pResolutionParent}>
        <div className={styles.pResolution1}>1080P Resolution</div>
        <div className={styles.buffering}>0 Buffering</div>
        <div className={styles.liveStreaming}>Live Streaming</div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <div className={styles.pResolutionGroup}>
        <div className={styles.pResolution1}>1080P Resolution</div>
        <div className={styles.buffering}>0 Buffering</div>
        <div className={styles.liveStreaming}>Live Streaming</div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img
        className={styles.watchingAMovie1Icon}
        alt=""
        src="/watchingamovie-1@2x.png"
      />
      <img className={styles.watching1Icon} alt="" src="/watching-1@2x.png" />
      <div className={styles.chooseWrapper}>
        <div className={styles.choose}>CHOOSE</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.subscribe} onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div className={styles.subscribe} onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.subscribe} onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
      </div>
    </div>
  );
};

export default Plans;
