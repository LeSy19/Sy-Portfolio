//import motion từ framer-motion để tạo animation
//useInView để kiểm tra phần tử có trong màn hình hay không
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

type Props = {
    children: React.ReactNode; //Nội dung được bọc bởi component này
    direction?: "up" | "down" | "left" | "right"; //hướng bắt đầu hiệu ứng
    delay?: number; //độ trễ animation
};

//hàm xác định hướng bắt đầu animation bằng cách trả về toạ độ x hoặc y lệch đi
const getAnimation = (direction: string) => {
    switch (direction) {
        case "up":
            return { y: 40 }; //bắt đầu từ dưới, trượt lên
        case "down":
            return { y: -40 }; //bắt đầu từ trên, trượt xuống
        case "left":
            return { x: 40 };//bắt đầu từ phải, trượt sang phải
        case "right":
            return { x: -40 }; //bắt đầu từ trái. trượt sang phải
        default:
            return { y: 40 };//mặc định là trượt từ dưới lên
    }
};

const FadeInWhenVisible: React.FC<Props> = ({
    children,
    direction = "up", //Nếu không truyền direction, mặc định là "up"
    delay = 0,
}) => {
    // dùng useInView để theo dõi phần từ
    const { ref, inView } = useInView({
        triggerOnce: true, // Chỉ trigger một lần duy nhất khi phần tử xuất hiện
        threshold: 0.2,// 20% phần tử hiển thị mới được coi là "in view"
    });

    //lấy giá trị offset dựa trên hướng
    const offset = getAnimation(direction);

    return (
        <motion.div
            ref={ref}  // Gắn ref để theo dõi khi phần tử vào màn hình
            initial={{ opacity: 0, ...offset }}  // Trạng thái ban đầu (ẩn + lệch)
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}} // Khi scroll tới: hiện + trở về vị trí gốc
            transition={{ duration: 0.6, ease: "easeOut", delay }} // Hiệu ứng mềm mại, delay nếu có

        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible;