package com.salonify.payment_microservice.controller;

import com.razorpay.RazorpayException;
import com.salonify.payment_microservice.domain.PaymentMethod;
import com.salonify.payment_microservice.payload.dto.BookingDTO;
import com.salonify.payment_microservice.payload.dto.UserDTO;
import com.salonify.payment_microservice.payload.response.PaymentLinkResponse;
import com.salonify.payment_microservice.service.PaymentService;
import com.stripe.exception.StripeException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/create")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @RequestBody BookingDTO booking,
            @RequestParam PaymentMethod paymentMethod
            ) throws StripeException, RazorpayException {
        UserDTO user = new UserDTO();
        user.setFullName("shashank");
        user.setEmail("shashank@gmail.com");
        user.setId(1L);

        PaymentLinkResponse res = paymentService.createOrder(user,booking,paymentMethod);
        return ResponseEntity.ok(res);


    }
}
