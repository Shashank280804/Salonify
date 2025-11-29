package com.salonify.payment_microservice.service.impl;

import com.razorpay.PaymentLink;
import com.salonify.payment_microservice.domain.PaymentMethod;
import com.salonify.payment_microservice.model.PaymentOrder;
import com.salonify.payment_microservice.payload.dto.BookingDTO;
import com.salonify.payment_microservice.payload.dto.UserDTO;
import com.salonify.payment_microservice.payload.response.PaymentLinkResponse;
import com.salonify.payment_microservice.repository.PaymentOrderRepository;
import com.salonify.payment_microservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentOrderRepository paymentOrderRepository;

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @Value("${razorPay.api.key}")
    private String razorpayApiKey;

    @Value("${razorPay.api.secret}")
    private String razorpayApiSecret;

    @Override
    public PaymentLinkResponse createOrder(UserDTO user, BookingDTO booking, PaymentMethod paymentMethod) {
        
        return null;
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long id) {
        return null;
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String paymentId) {
        return null;
    }

    @Override
    public PaymentLink createRazorpayPaymentLink(UserDTO user, Long amound, Long orderId) {
        return null;
    }

    @Override
    public String createStripePaymentLink(UserDTO user, Long amound, Long orderId) {
        return "";
    }
}
