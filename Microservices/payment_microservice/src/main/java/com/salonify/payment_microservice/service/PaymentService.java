package com.salonify.payment_microservice.service;

import com.razorpay.PaymentLink;
import com.salonify.payment_microservice.domain.PaymentMethod;
import com.salonify.payment_microservice.model.PaymentOrder;
import com.salonify.payment_microservice.payload.dto.BookingDTO;
import com.salonify.payment_microservice.payload.dto.UserDTO;
import com.salonify.payment_microservice.payload.response.PaymentLinkResponse;

public interface PaymentService {

     PaymentLinkResponse createOrder(UserDTO user, BookingDTO booking, PaymentMethod paymentMethod);

     PaymentOrder getPaymentOrderById(Long id);

     PaymentOrder getPaymentOrderByPaymentId(String paymentId);

     PaymentLink createRazorpayPaymentLink(UserDTO user,Long amound,Long orderId);

     String createStripePaymentLink(UserDTO user,Long amound,Long orderId);
}
