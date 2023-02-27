package com.Train.Service;

import java.util.List;


import com.Train.Entity.TicketBookingEntity;

public interface TicketBookingInterface {
  List<TicketBookingEntity> getdetails();
  public void savedata(TicketBookingEntity tbe);
  public void updatedata(TicketBookingEntity tbe);
  public void deletedata(int id);
}
