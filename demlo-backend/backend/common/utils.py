class Utils:
    """
    Service
    """

    @classmethod
    def generate_user_response(cls, user_instance, msg=None):
        """
        Converts user instance to dictionary
        """
        user_resp = {"id": user_instance.id,
                     "name": user_instance.first_name,
                     "contact": user_instance.contact_number,
                     "email": user_instance.email,
                     "username": user_instance.username,
                     "dob": str(user_instance.dob),
                     "avatar": user_instance.avatar.name if user_instance.avatar else None
                     }

        return {"success": True, "message": msg, "data": user_resp}
